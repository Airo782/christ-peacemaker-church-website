export function ForbiddenError(message: string = "Forbidden") {
  const error = new Error(message);
  (error as any).code = "FORBIDDEN";
  (error as any).status = 403;
  return error;
}
