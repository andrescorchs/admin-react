export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log(response);
    return response.json();
}