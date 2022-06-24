import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import widgetLoader from '../widgetLoader';

interface WidgetState {
  status: string;
  loading: String;
}

const initialState: WidgetState = {
  status: '',
  loading: 'idle',
};

const widgetSlice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // Вызывается прямо перед выполнением запроса
      .addCase(widgetLoader.pending, (state) => {
        state.status = 'Loading.First';
        state.loading = 'loading';
      })
      // Вызывается в том случае если запрос успешно выполнился
      .addCase(widgetLoader.fulfilled, (state) => {
        state.status = 'Success.LoadingFinished';
        state.loading = 'idle';
      })
      // Вызывается в случае ошибки
      .addCase(widgetLoader.rejected, (state) => {
        state.status = 'Error.Timeout';
        state.loading = 'failed';
      });
  },
});

export const { setStatus } = widgetSlice.actions;
export default widgetSlice.reducer;
