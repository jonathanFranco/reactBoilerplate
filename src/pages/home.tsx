import React, { useEffect, useState } from "react";
import { FaEdit, FaExternalLinkAlt, FaTrashAlt, FaPlus } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Data, DTO } from "src/interfaces/data.interface";
import { addItem, deleteItem, updateItem } from "src/services/rest/crud.rest";

export const Home = () => {
  const uuidKey: any = Date.now().toString();
  const [data, setData] = useState([] as Data[]);
  const [value, setValue] = useState({
    name: "",
    uuid: uuidKey,
  } as Data);
  const [valueEdit, setValueEdit] = useState({} as any);
  const [idx, setIdx] = useState<any>();

  const style: any = {
    btn: "hover:bg-gray-800 text-white font-bold p-3 rounded text-md",
    btnRounded:
      "hover:text-white font-bold p-2 rounded-full text-sm cursor-pointer",
    disabled:
      "bg-gray-800 text-gray-500 font-bold p-3 rounded cursor-default text-md",
    input: "my-2 rounded shadow-sm bg-gray-100 text-gray-900 w-80",
    inputDisabled: "my-2 rounded shadow-sm bg-gray-400 text-gray-900",
  };

  function changeData(event: any): void {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  }

  function getDataStorage(): void {
    const arrList: any = localStorage.getItem("data");
    setData(JSON.parse(arrList) || []);
  }

  function setDataValue(response: any, index: any): void {
    setValue({ name: response.name, uuid: response.uuid });
    setIdx(index);
    setValueEdit(response);
  }

  useEffect(() => {
    getDataStorage();
  }, []);

  return (
    <>
      <div className="container mx-auto p-5">
        <p className="text-gray-600 text-xl font-bold">Adicionar Categoria</p>
        <div className="flex flex-col w-100 justify-center">
          <div className="flex justify-between items-center gap-5 w-64 p-1">
            <div className="flex justify-center items-center gap-2 mb-5 text-gray-900">
              <input
                type="text"
                name="id"
                value={value?.uuid}
                onChange={(e) => changeData(e)}
                hidden
              />
              <input
                type="text"
                name="name"
                value={value?.name ?? ""}
                className={
                  data?.length === 12 ? style.inputDisabled : style.input
                }
                onChange={(e) => changeData(e)}
                autoComplete="off"
                disabled={data?.length === 12}
              />

              {valueEdit.name ? (
                <button
                  className={`${
                    value.name ? style.btn : style.disabled
                  } bg-gray-700`}
                  onClick={() =>
                    updateItem({
                      data,
                      index: idx,
                      value,
                      setValue,
                      setValueEdit,
                      getDataStorage,
                    } as DTO)
                  }
                  disabled={!value.name}
                >
                  <BiRefresh />
                </button>
              ) : (
                <button
                  className={`${
                    !value.name || data?.length === 12
                      ? style.disabled
                      : style.btn
                  } bg-gray-700`}
                  onClick={() =>
                    addItem({ data, value, setValue, getDataStorage } as DTO)
                  }
                  disabled={!value.name || data?.length === 12}
                >
                  <FaPlus />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-2" style={{ height: "500px" }}>
          {data?.length === 0 ? (
            <div
              className="bg-gray-100 flex flex-col justify-center items-center"
              style={{ height: "500px" }}
            >
              <VscEmptyWindow size={70} className="text-gray-400" />
              <p className="mt-3 text-md md:text-2xl text-center text-gray-400">
                Adicione uma categoria para começar...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 bg-gray-100 rounded gap-2 col-span-12 p-3">
              {data?.map((response, i) => {
                return (
                  <div
                    className="max-w-sm rounded bgYellow overflow-hidden shadow-lg cursor-default"
                    key={i}
                  >
                    <div className="px-6 py-4">
                      <div
                        className="font-bold text-xl mb-2 truncate w-48 text-gray-800"
                        title={response.name}
                      >
                        {response.name}
                      </div>
                    </div>
                    <div className="px-6 pt-4 pb-4 flex justify-end gap-2">
                      <span
                        className={`${style.btnRounded} bg-gray-300 text-gray-800 hover:bg-red-700`}
                        onClick={() =>
                          deleteItem({ data, index: i, setData } as DTO)
                        }
                      >
                        <FaTrashAlt />
                      </span>
                      <button
                        className={`${style.btnRounded} bg-gray-300 text-gray-800 hover:bg-gray-700`}
                        onClick={() => setDataValue(response, i)}
                        disabled={data?.length === 12}
                      >
                        <FaEdit />
                      </button>
                      {response.uuid && (
                        <Link
                          to={`/page/${response.uuid}`}
                          className={`${style.btnRounded} bg-gray-700 yellow hover:bg-gray-700`}
                        >
                          <FaExternalLinkAlt />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {data?.length > 0 && (
            <span
              className={`${
                data?.length === 12 ? "text-red-400" : "text-white"
              } flex justify-end mt-2 cursor-default`}
            >
              {data?.length}/12 Limite max. atingido
            </span>
          )}
        </div>
      </div>
    </>
  );
};
