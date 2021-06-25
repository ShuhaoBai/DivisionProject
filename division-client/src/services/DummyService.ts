//NoteStore
import { observable, action } from 'mobx';
import Post from '../models/Post';
import { fetchWpCarouselsContent } from '../services/FetchService';
export default class DummyService {
  @observable
  dummyAllData: Post[] = [];

  @action
  fetchDummyAllData = (): void => {
    fetchWpCarouselsContent().then(
      (dummyAllData: Post[]) => (this.dummyAllData = dummyAllData)
    );
  };
}
