import { fetchCat, adoptCat } from './cat.action';
import { fetchDog, adoptDog } from './dog.action';

//consolidating our actions into one index file to import later
const petActions = { fetchCat, fetchDog, adoptCat, adoptDog };
export default petActions;
