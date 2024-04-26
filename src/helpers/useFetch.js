import axios from "axios";

export async function apiGet({ headers, url = "/" }) {
  try {
    const result = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    return {
      data: result.data,
      status: result.status,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function apiPost({ payload = {}, headers, url = "/" }) {
  try {
    const result = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    return {
      data: result.data,
      status: result.status,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function apiPut({ payload = {}, headers, url = "/" }) {
  try {
    const result = await axios.put(url, payload, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    return {
      data: result.data,
      status: result.status,
    };
  } catch (error) {
    console.error(error);
  }
}
