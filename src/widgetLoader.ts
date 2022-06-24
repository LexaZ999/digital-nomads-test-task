import { createAsyncThunk } from '@reduxjs/toolkit';
import delay from './delay';

// Создаем thunk для имитации загрузки виджета,
// И искусственно тормозим время загрузки с помощью функции delay
const widgetLoader = createAsyncThunk(
  'widgetLoader',
  async () => {
    return delay(5000)
  },
);

export default widgetLoader;