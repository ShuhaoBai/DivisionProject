import { observable, action } from 'mobx';

export default class DummyService {
  @observable
  dummyValue: number = 0;

  @action
  increment = (): void => {
    this.dummyValue++;
  };

  @action
  decrement = (): void => {
    this.dummyValue--;
  };

  @action
  multiplyBy = (scalingFactor: number): void => {
    this.dummyValue *= scalingFactor;
  };
}
