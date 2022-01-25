export async function getAuthUserApi(userData) {
  const url = "https://pasteblock.herokuapp.com/api/usuario/" + userData;

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
