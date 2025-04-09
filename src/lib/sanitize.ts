import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

// Create a single instance of JSDOM and DOMPurify
const window = new JSDOM("").window;
const purify = DOMPurify(window);

export function sanitizeHtml(input: string): string {
  try {
    return purify.sanitize(input, {
      ALLOWED_TAGS: [], // Remove all HTML tags
      ALLOWED_ATTR: [], // Remove all attributes
    });
  } catch (error) {
    console.error("Error sanitizing HTML:", error);
    return input; // Return original input if sanitization fails
  }
}
