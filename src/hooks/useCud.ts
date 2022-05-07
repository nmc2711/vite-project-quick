import { useLayoutEffect, useState } from 'react';

type TCud = {
  data: any[];
  callback?: () => void;
};

function useCud({ data, callback }: TCud) {
  const renderFlag = data && data.length > 0;

  const [newItemState, setNewItemState] = useState(data);

  useLayoutEffect(() => {
    setNewItemState(insertSeq(data));
  }, [renderFlag]);

  function insertSeq(data: any[]) {
    const arr = [...data];

    data.forEach(element => {
      element.seq =  Math.floor(Math.random() * 1000);
    });
    return arr;
  }

  function handlePeriodCreate<T>(item: T) {
    const myData = [...newItemState];
    if (newItemState.length >= 10) return;
    myData.push(item);
    setNewItemState(myData);

    callback && callback();
  }

  const handlePeriodUpdate = (e: React.ChangeEvent<HTMLInputElement>, seq: number) => {
    if (e.target.value.match(/[e\-+=,\s.]/g)) return;
    if (isNaN(+e.target.value)) return;

    const myData = [...newItemState];
    const { name, value } = e.target;
    myData.find(data => data.seq === seq)![name] = value;
    setNewItemState(myData);

    callback && callback();
  };

  function handlePeriodRemove(seq: number) {
    const myData = [...newItemState];
    const newPeriodState: any = myData.filter((item: any) => item.seq !== seq);

    if (myData.find(data => data.seq === seq)!.isRepresent) {
      newPeriodState[0].isRepresent = true;
    }
    setNewItemState(newPeriodState);

    callback && callback();
  }

  const handleDefaultChange = (seq: number) => {
    const myData = [...newItemState];

    myData.forEach(item => {
      item.isRepresent = item.seq === seq;
    });
    setNewItemState(myData);

    callback && callback();
  };

  function handleInitializePeriod<T>(newItem: T) {
    setNewItemState([newItem]);

    callback && callback();
  }

  return {
    newItemState,
    handlePeriodCreate,
    handlePeriodUpdate,
    handlePeriodRemove,
    handleDefaultChange,
    handleInitializePeriod,
  };
}
export default useCud;
