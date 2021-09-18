const resolvePromise = (data): Promise<unknown> =>
  new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error('Required data must be provided.'));
    }

    setTimeout(() => resolve(data), 1000);
  });

const saveFormValues = async (data) => {
  try {
    const result = await resolvePromise(data);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  saveFormValues,
};
