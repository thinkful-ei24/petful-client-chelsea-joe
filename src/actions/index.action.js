import { fetchCat, adoptCat } from './cat.action';
import { fetchDog, adoptDog } from './cat.action';

//consolidating our actions into one index file to import later
export const petActions = { fetchCat, fetchDog, adoptCat, adoptDog };
