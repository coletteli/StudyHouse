import { writable } from 'svelte/store';

const SessionStore = writable<{
  inSession: boolean,
  sessionLength: number,
  modalType: string | null,
  counter: number,
  sessionActivity: string
}>({
  inSession: false,
  sessionLength: 0,
  modalType: null,
  counter: 0,
  sessionActivity: ""
});

const update = SessionStore.update;

export default {
  subscribe: SessionStore.subscribe,
  set: SessionStore.set,
  update
};
