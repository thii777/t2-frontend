import Head from "next/head";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { useState } from "react";
import Input from "../../components/Input";
import Router from "next/router";

export default function PayrollLoans() {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [profession, setProfession] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [value, setValue] = useState("");
  const [monthRange, setMonthRange] = useState("");

  function submitData() {
    Router.push('/partners')
  }

  return (
    <>
      <Head>
        <title>T2 - Creditos</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
      </Head>

      <Navbar />
      <Container>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Dados pessoais
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use um endereço permanente onde você possa receber e-mails
                  sobre seus empréstimo.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <Input
                          type="text"
                          label="Nome Completo"
                          value={name}
                          valueChange={setName}
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Input
                          type="text"
                          label="CPF"
                          value={document}
                          valueChange={setDocument}
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <Input
                          type="email"
                          label="E-mail"
                          value={email}
                          valueChange={setEmail}
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Estado civil
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          // value={maritalStatus}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>Casado</option>
                          <option>Divorciado</option>
                          <option>Solteiro</option>
                          <option>Viuvo</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Qual sua ocupação?
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          // value={profession}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>Funcionário publico</option>
                          <option>Assalariado</option>
                          <option>Desempregado</option>
                          <option>Empresario ou PJ</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Input
                          type="text"
                          label="Data de nascimento"
                          value={birthDay}
                          valueChange={setBirthDay}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <fieldset>
                        <legend className="contents text-base font-medium text-gray-900">
                          Peça uma cotação grátis
                        </legend>
                        <p className="text-sm text-gray-500">
                          Quanto quer emprestado?
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-700"
                              >
                                R$ 5.000,00
                              </label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="candidates"
                                name="candidates"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="candidates"
                                className="font-medium text-gray-700"
                              >
                                R$ 15.000,00
                              </label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="offers"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="offers"
                                className="font-medium text-gray-700"
                              >
                                R$ 25.000,00
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend className="contents text-base font-medium text-gray-900">
                          Sobre o pagamento
                        </legend>
                        <p className="text-sm text-gray-500">
                          Quer pagar em quantas parcelas?.
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="push-everything"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              06 Meses
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push-email"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="push-email"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              12 Meses
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="push-nothing"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              24 Meses
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      onClick={submitData}
                      className="inline-flex justify-center rounded-md border border-transparent  bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Avançar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
