/**
 * Enterprise-grade Security Utilities for Input Sanitization, Validation, and Rate Limiting.
 * Shared between client-side flows and hypothetical server-side validations.
 */

// List of allowed Area of Interest options
export const ALLOWED_INTERESTS = [
  "1-on-1 Stock Consultation",
  "Stock Market Education",
  "Technical Analysis Coaching",
  "Risk Management",
  "Fundamental Analysis",
  "Free Market Insights"
] as const;

/**
 * Sanitizes input text by removing HTML tags, script elements,
 * inline JavaScript event handlers, and javascript: links.
 */
export function sanitizeInput(input: string): string {
  if (!input) return "";

  let sanitized = input;

  // 1. Remove HTML script elements and their content
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  // 2. Remove standard HTML tags
  sanitized = sanitized.replace(/<[^>]*>/g, "");

  // 3. Remove inline JavaScript event handlers (e.g. onload=, onerror=, onclick=)
  sanitized = sanitized.replace(/on\w+\s*=\s*".*?"/gi, "");
  sanitized = sanitized.replace(/on\w+\s*=\s*'.*?'/gi, "");
  sanitized = sanitized.replace(/on\w+\s*=\s*[^\s>]+/gi, "");

  // 4. Remove javascript: links / expressions
  sanitized = sanitized.replace(/javascript:/gi, "");

  // 5. Trim extra whitespace
  return sanitized.trim();
}

/**
 * Validates full name: letters and spaces only, length between 2 and 50 characters.
 */
export function validateName(name: string): boolean {
  if (!name) return false;
  const sanitized = name.trim();
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  return nameRegex.test(sanitized);
}

/**
 * Validates email structure using a robust standard regex.
 */
export function validateEmail(email: string): boolean {
  if (!email) return false;
  const sanitized = email.trim();
  // Standard RFC 5322 email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(sanitized) && sanitized.length <= 100;
}

/**
 * Validates phone/WhatsApp numbers (digits, optional leading +, spaces, hyphens, parentheses).
 * Length must be between 8 and 20 characters.
 */
export function validatePhone(phone: string): boolean {
  if (!phone) return false;
  const sanitized = phone.trim();
  const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
  return phoneRegex.test(sanitized);
}

/**
 * Validates Area of Interest dropdown selection.
 */
export function validateInterest(interest: string): boolean {
  return ALLOWED_INTERESTS.includes(interest as any);
}

/**
 * Checks client-side rate limit using localStorage to prevent spam / bot floods.
 * Default: Maximum of 3 submissions within a 5-minute window.
 * Returns true if the request is ALLOWED, false if it is BLOCKED.
 */
export function checkRateLimit(
  key: string = "contact_form_submissions",
  limitCount: number = 3,
  windowMs: number = 300000 // 5 minutes in milliseconds
): boolean {
  try {
    const now = Date.now();
    const storageKey = `rate_limit_${key}`;
    const submissionHistoryStr = localStorage.getItem(storageKey);
    
    let timestamps: number[] = [];
    if (submissionHistoryStr) {
      timestamps = JSON.parse(submissionHistoryStr);
    }

    // Filter out timestamps outside the current window
    timestamps = timestamps.filter((timestamp) => now - timestamp < windowMs);

    if (timestamps.length >= limitCount) {
      return false; // Blocked: limit exceeded
    }

    // Log the current submission timestamp
    timestamps.push(now);
    localStorage.setItem(storageKey, JSON.stringify(timestamps));
    return true; // Allowed
  } catch (error) {
    // Fail-open or fail-closed based on preference, but here we allow to not break UX on storage quota/error
    console.error("Rate limiting storage error:", error);
    return true;
  }
}
