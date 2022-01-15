import { Data, DTO } from "src/interfaces/data.interface";

export function addItem({ data, value, setValue, getDataStorage }: DTO): void {
  data?.push({ name: value.name, uuid: value.uuid });
  localStorage.setItem("data", JSON.stringify(data));
  setValue(new Data("", Date.now().toString()));
  getDataStorage();
}

export function updateItem({
  data,
  index,
  value,
  setValue,
  setValueEdit,
  getDataStorage,
}: DTO) {
  data[index] = new Data(value.name, value.uuid);
  const updatedData = JSON.stringify(data);
  localStorage.setItem("data", updatedData);
  setValue(new Data());
  setValueEdit({});
  getDataStorage();
}

export function deleteItem({ data, index, setData }: DTO): void {
  const filterData: Data[] = data?.filter((e, i) => i !== index);
  const response = JSON.stringify(filterData);
  setData(filterData);
  localStorage.setItem("data", response);
}
