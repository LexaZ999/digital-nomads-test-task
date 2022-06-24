// setTimeout обернутый в промис, всегда завершается успешно

const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default delay;