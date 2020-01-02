export function arrayJoin<T>(arr: T[], joiner: T): T[] {
  if (arr.length < 2) {
    return arr;
  }
  const joined: T[] = [arr[0]];
  for (const item of arr.slice(1)) {
    joined.push(joiner);
    joined.push(item);
  }
  return joined;
}

export function splitOnce(value: string, splitter: string): [string] | [string, string] {
  const splitterIndex = value.indexOf(splitter);
  if (splitterIndex === -1) {
    return [value];
  }
  return [value.slice(0, splitterIndex), value.slice(splitterIndex + 1)];
}
