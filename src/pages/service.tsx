import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "src/interfaces/data.interface";

export const Service = () => {
  const { uuid } = useParams() as any;
  const [data, setData] = useState([] as Data[]);

  const fakeData: any = {
    subtitle:
      "Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto. Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré-definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet. Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis. Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.",
    img: "",
    users: [
      {
        photo: "https://picsum.photos/200",
        user: "Isaac Sebastião",
        service: "asfgafg",
      },
      {
        photo: "https://picsum.photos/500",
        user: "Osvaldo Novaes",
        service: "adfgadfgdf",
      },
      {
        photo: "https://picsum.photos/600",
        user: "Aurora Barros",
        service: "adfgadfgdf",
      },
      {
        photo: "https://picsum.photos/700",
        user: "Roberto Galvão",
        service: "adfgadfgdf",
      },
      {
        photo: "https://picsum.photos/800",
        user: "Rosa Andreia",
        service: "adfgadfgdf",
      },
    ],
  };

  function getDataStorageById(): void {
    const arrList: any = localStorage.getItem("data");
    const dataArr = JSON.parse(arrList);
    const filterArr = dataArr?.filter((e: Data) => e.uuid === uuid);
    setData(filterArr || []);
  }

  useEffect(() => {
    getDataStorageById();
    console.log(data, fakeData);
  }, []);

  return (
    <>
      {data?.map((response, i) => {
        return (
          <div className="container mx-auto pt-5">
            <div className="flex justify-center flex-wrap px-6 my-12">
              <div className="w-full flex flex-wrap">
                <div className="w-full h-auto bgYellow lg:block lg:w-1/2 bg-cover rounded shadow-sm">
                  <div className="text-gray-800 p-8">
                    <h3 className="text-2xl font-bold truncate">{response.name}</h3>
                    <p className="text-sm mt-3 text-gray-600">
                      {fakeData.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 bg-white p-2 rounded-lg lg:rounded-l-none">
                  <h1 className="text-center text-3xl font-bold mt-4 md:mt-0">
                    Lista de usuários
                    <p className="yellow -mt-5">_____</p>
                  </h1>
                  <div className="p-3 mb-4 bg-white rounded">
                    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 rounded gap-3 col-span-12 p-3">
                      {fakeData.users?.map((response: any, i: any) => {
                        return (
                          <div
                            key={i}
                            className="bgYellow p-3 rounded flex gap-2 items-center shadow-sm"
                          >
                            <img
                              className="rounded-full ring-2 ring-white"
                              src={response.photo}
                              alt=""
                              width={40}
                              height={40}
                            />
                            <p className="truncate text-gray-800">
                              {response.user}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
