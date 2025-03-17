"use client";

import { updateUserSettings } from "@/actions/update-user-settings";
import FormHelperText from "@/components/ui/formParts/FormHelperText";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { UpdateUserSettingsValues } from "./validation/updateUserSettingsSchema";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormUpdateUserProps } from "./defs";
import Checkbox from "@/components/ui/formParts/Checkbox";
import { Button } from "@/components/ui/Button";
import { Loader } from "lucide-react";
import { MUITextFieldSelect } from "@/components/ui/formParts/MUITextFieldSelect";
import { useCurrencyOptions } from "@/hooks/useCurrencyOptions";
import { CURRENCY } from "@prisma/client";

const FormUpdateUser = ({ user }: FormUpdateUserProps) => {
  const [enablePasswordUpdate, setEnablePasswordsUpdate] = useState(false);
  const CURRENCY_OPTIONS = useCurrencyOptions();
  const [state, formAction, isPending] = useActionState(updateUserSettings, {
    errors: {},
    success: "",
  });
  const { control, handleSubmit, reset } = useForm<UpdateUserSettingsValues>({
    mode: "onTouched",
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      currency: user?.currency || undefined,
      password: "",
      newPassword: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.success);
      reset({
        password: "",
        newPassword: "",
        name: state.updatedUser?.name || user.name || undefined,
        email: state.updatedUser?.email || user.email || undefined,
        currency: state.updatedUser?.currency || undefined,
      });
    }
  }, [reset, state, user]);

  const onSubmit = () => {
    const formData = new FormData(formRef.current!);
    if (!enablePasswordUpdate) {
      formData.delete("password");
      formData.delete("newPassword");
    }
    startTransition(() => formAction(formData));
  };

  return (
    <form
      ref={formRef}
      className="flex w-full flex-col flex-wrap"
      autoComplete="off"
      noValidate
      action={formAction}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(onSubmit)(event);
      }}
    >
      <div className="mb-12">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <MuiTextField
              {...field}
              id="name"
              placeholder="Enter your name"
              label="Name"
              variant="outlined"
              error={!!state?.errors?.name}
              fullWidth
              margin="none"
            />
          )}
        />

        {state?.errors?.name && (
          <FormHelperText>{state.errors.name.join(", ")}</FormHelperText>
        )}
      </div>
      <div className="input-select-currency-wrapper mb-12">
        <Controller
          control={control}
          name="currency"
          render={({ field }) => (
            <MUITextFieldSelect
              id="currency-select"
              labelText="Set your default currency for transactions"
              displayValue
              name="currency"
              placeholder="i.e GBP"
              options={CURRENCY_OPTIONS}
              data-testid="currency-select-field-dropdown"
              aria-label="Enter your currency"
              onChange={(selected) => {
                const typedSelected = selected as {
                  label: string;
                  value: CURRENCY;
                };
                field.onChange(typedSelected.value);
              }}
              value={field.value ?? ""}
              displayEmpty
              emptyLabel="Select a currency"
              fullWidth
            />
          )}
        />
        {state?.errors?.currency && (
          <FormHelperText>{state.errors.currency.join(", ")}</FormHelperText>
        )}
      </div>
      {!user.is0Auth && (
        <>
          <div className="mb-12">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  {...field}
                  id="email"
                  placeholder="Enter your email"
                  label="Email"
                  variant="outlined"
                  error={!!state?.errors?.email}
                  fullWidth
                  margin="none"
                  type="email"
                />
              )}
            />
            {state?.errors?.email && (
              <FormHelperText>{state.errors.email.join(", ")}</FormHelperText>
            )}
          </div>
          <div className="mb-12">
            <Checkbox
              label="I want to update my password"
              defaultChecked={enablePasswordUpdate}
              onChange={() => setEnablePasswordsUpdate(!enablePasswordUpdate)}
              id="display-passwords"
              strokeColor="white"
              className="border-border-input-light checked:bg-[hsla(0,0%,100%,0.09)]"
            />
          </div>
          <div className="mb-12">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  {...field}
                  id="password"
                  placeholder="********"
                  label="Old password"
                  variant="outlined"
                  error={!!state?.errors?.password}
                  fullWidth
                  margin="none"
                  type="password"
                  disabled={!enablePasswordUpdate}
                />
              )}
            />
            {state?.errors?.password && (
              <FormHelperText>
                {state.errors.password.join(", ")}
              </FormHelperText>
            )}
          </div>
          <div className="mb-12">
            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  {...field}
                  id="newPassword"
                  placeholder="********"
                  label="New password"
                  variant="outlined"
                  error={!!state?.errors?.newPassword}
                  fullWidth
                  margin="none"
                  type="password"
                  disabled={!enablePasswordUpdate}
                />
              )}
            />
            {state?.errors?.newPassword && (
              <FormHelperText>
                {state.errors.newPassword.join(", ")}
              </FormHelperText>
            )}
          </div>
        </>
      )}
      <div className="mb-8">
        <Button type="submit" variant="default" size="sm" disabled={isPending}>
          {isPending && <Loader className="size-6 animate-spin" />}
          <span className="inline-block">
            {isPending ? "Updating now..." : "Update user settings"}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default FormUpdateUser;
