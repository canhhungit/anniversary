export class FetchError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'FetchError';
    this.status = status;
  }
}

export async function fetcher<T>(
  input: string,
  init?: RequestInit,
): Promise<T> {
  try {
    const response = await fetch(input, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
      ...init,
    });

    const contentType = response.headers.get('content-type');
    const payload = contentType?.includes('application/json')
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      throw new FetchError(
        response.status,
        typeof payload === 'string' ? payload : JSON.stringify(payload),
      );
    }

    return payload as T;
  } catch (error) {
    if (error instanceof FetchError) {
      throw error;
    }

    const message =
      error instanceof Error ? error.message : 'Unexpected fetch error';
    throw new FetchError(0, message);
  }
}
