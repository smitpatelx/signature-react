"use client";

import { E, safeStringifyJson } from "@spx/lib/common";
import {
  getStorageInstance,
  STORAGE_TYPE,
  STORAGE_KEYS,
  useDebouncedValue,
  useGeneratorReducer,
} from "@spx/lib/client";
import { useEffect } from "react";
import { Configuration } from "./configuration";
import { Form } from "./form";
import { SignatureOutput } from "./signature-output";

export const GeneratorViewDynamic = () => {
  const [state, dispatch] = useGeneratorReducer();

  const [debouncedValue] = useDebouncedValue(state, 1000, {
    leading: false,
  });

  useEffect(() => {
    const generateStorageInstance = getStorageInstance(STORAGE_TYPE.local, STORAGE_KEYS.generator);
    const stringifiedValue = safeStringifyJson(debouncedValue);

    if (E.isRight(stringifiedValue)) {
      generateStorageInstance.set(stringifiedValue.right);
    }
  }, [debouncedValue]);

  return (
    <div className="flex-1 h-full flex flex-col">
      <Configuration {...state.config} dispatch={dispatch} />

      <div className="flex-1 h-full flex flex-col lg:flex-row flex-nowrap gap-4 container mx-auto pb-12 lg:pb-0">
        <Form {...state.formValues} {...state.config} dispatch={dispatch} />

        <div className="inline-block h-px w-0 lg:h-auto lg:w-px bg-zinc-800" />

        <SignatureOutput {...state.config} {...state.formValues} />
      </div>
    </div>
  );
};

export const GeneratorView = () => {
  const [state, dispatch] = useGeneratorReducer();

  const [debouncedValue] = useDebouncedValue(state, 1000, {
    leading: false,
  });

  useEffect(() => {
    const generateStorageInstance = getStorageInstance(STORAGE_TYPE.local, STORAGE_KEYS.generator);
    const stringifiedValue = safeStringifyJson(debouncedValue);

    if (E.isRight(stringifiedValue)) {
      generateStorageInstance.set(stringifiedValue.right);
    }
  }, [debouncedValue]);

  return (
    <div className="flex-1 h-full flex flex-col">
      <Configuration {...state.config} dispatch={dispatch} />

      <div className="flex-1 h-full flex flex-row flex-nowrap gap-4 container mx-auto">
        <Form {...state.formValues} {...state.config} dispatch={dispatch} />

        <div className="inline-block w-px bg-zinc-800" />

        <SignatureOutput {...state.config} {...state.formValues} />
      </div>
    </div>
  );
};
