export default function handleClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
