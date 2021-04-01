export const sanitizeInput = (input: unknown): string => {
  if (typeof input === 'string') {
    return input.trim();
  }
  throw new Error('Input is not string');
};

export const validateName = (name: string): boolean | string => {
  const sanitizedName = sanitizeInput(name);
  if (sanitizedName.length > 3) {
    return true;
  }
  return 'Name should be 3 chars long';
};
