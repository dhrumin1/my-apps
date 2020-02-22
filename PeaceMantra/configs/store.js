import { writable } from 'svelte/store';
export const Sound = writable(0);
export const CountDown = writable(0);
export const StartPauseStop = writable("stop");