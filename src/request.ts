import Cookies from 'js-cookie';

export async function sendCodeOnEmail(email: string) {
    const url = 'https://edu.strada.one/api/user';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error');
    }
}

export async function changeName(name: string) {
    const token = Cookies.get('userToken');
    const response = await fetch('https://edu.strada.one/api/user', {
        method: 'PATCH',
        body: JSON.stringify({
            name,
        }),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
    });
}

export async function getUser() {
    const token = Cookies.get('userToken');
    try {
        const response = await fetch('https://edu.strada.one/api/user/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
        });
        const user = await response.json();

        return user;
    } catch (error) {
        console.log('error');
    }
}

export async function getMessage() {
    const token = Cookies.get('userToken');
    try {
        const response = await fetch('https://edu.strada.one/api/messages/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
        });

        return response.json();
    } catch (error) {
        console.log('error');
    }
}
