declare module 'react-native-change-icon' {
  export async function changeIcon(iconName: string): Promise<string>;
  export async function getIcon(): Promise<string>;
}
