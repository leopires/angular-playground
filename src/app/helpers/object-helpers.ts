export function getClassName(instance: object): string {
  return instance.constructor.name.toString();
}
