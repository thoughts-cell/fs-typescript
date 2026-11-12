import id from 'zod/v4/locales/id.js';
import diaries from '../../data/entries.ts';
// import  diaryData  from '../../data/entries.ts' with {type: 'json'};
import type { DiaryEntry, NonSensitiveDiaryEntry,NewDiaryEntry} from '../types.ts';


 
const getEntries = (): DiaryEntry[]  => {
  return diaries;
};

  


const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {  
  return diaries.map(({ id, date, weather, visibility }) => ({    
    id,    
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number): DiaryEntry | undefined => {  
  const entry = diaries.find(d => d.id === id);  
  return entry;
};


 

const addDiary = ( entry: NewDiaryEntry ): DiaryEntry => {  
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...entry  
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
  findById
};