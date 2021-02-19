const avatars = require.context("./assets/img/avatars/", false, /\.jpg$/i);

export default function getAvatar(name: string, large?: boolean): string {
  try {
    const nameParts = name.split(".");
    if (large) {
      return avatars(`./${nameParts[0]}@2x.${nameParts[1]}`);
    }

    return avatars(`./${name}`);
  } catch (error) {
    return avatars("./noavatar.jpg");
  }
}
