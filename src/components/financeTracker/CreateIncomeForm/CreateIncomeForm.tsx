"use client";

import { Button } from "@/components/ui/Button";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Controller, useForm } from "react-hook-form";
import { IncomeSchemaType } from "./validation/createIncomeSchema";
import { InputSx } from "@/utils/stylesUtils";
import { Modal } from "@/components/ui/Modal";
import { CreateIncomeFormProps } from "./defs";
import NumberField from "@/components/ui/formParts/NumberField/NumberField";
import MuiSelectField from "@/components/ui/formParts/MuiSelectField";
import { INCOME_CATEGORIES } from "@/constants/mocks";
import { MUIDateTimePicker } from "@/components/ui/formParts/MUIDateTimePicker";
import { isValidDate, DATE_GLOBAL_FORMAT } from "@/utils/dates";

const CreateIncomeForm = ({ open, onClose }: CreateIncomeFormProps) => {
  //   const [state, formAction, isPending] = useActionState(
  //     createPost.bind(null, slug),
  //     {
  //       errors: {},
  //     },
  //   );

  const { control, reset } = useForm<IncomeSchemaType>({
    mode: "onTouched",
    defaultValues: {
      description: "",
      amount: 0,
      category: "",
      date: undefined,
    },
  });

  //const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <Modal
        open={open}
        title="Create a new incometransaction"
        additionalPaperProps={{
          sx: {
            lg: {
              minWidth: "64rem",
            },
          },
        }}
        onClose={() => {
          onClose();
          reset();
        }}
      >
        <form
          // ref={formRef}
          className="flex w-full flex-col flex-wrap"
          autoComplete="off"
          noValidate
          //   action={formAction}
          //   onSubmit={(event: FormEvent<HTMLFormElement>) => {
          //     event.preventDefault();
          //     handleSubmit(() => {
          //       startTransition(() => {
          //         formAction(new FormData(formRef.current!));
          //       });
          //     })(event);
          //   }}
        >
          <div className="mb-12">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  id="description-value"
                  placeholder="Transaction description (optional)"
                  name="description"
                  fullWidth
                  label="Description"
                  data-testid="descriptionValue"
                  aria-label="Enter description"
                  onChange={field.onChange}
                  multiline
                  rows={2}
                  margin="none"
                  value={field.value}
                  // error={!!state?.errors?.description}
                  sx={InputSx}
                />
              )}
            />

            {/* {state?.errors?.title && (
              <FormHelperText>{state.errors.title.join(", ")}</FormHelperText>
            )} */}
          </div>
          <div>
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <NumberField
                  id="income-amount"
                  placeholder="Transaction amount (required)"
                  name="amount"
                  fullWidth
                  label="Amount"
                  data-testid="amountValue"
                  aria-label="Enter amount"
                  onChange={field.onChange}
                  margin="none"
                  value={field.value}
                  type="number"
                  sx={InputSx}
                  isCurrency
                  step="1"
                  min="0"
                  //error={!!state?.errors?.price}
                />
              )}
            />

            {/* {state?.errors?.content && (
              <FormHelperText>
                {state?.errors?.content.join(", ")}
              </FormHelperText>
            )} */}
          </div>
          <div className="transactions-row mb-10 flex items-start gap-10">
            <div className="categories-select-wrapper flex w-full flex-col md:w-[50%]">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <>
                    <MuiSelectField
                      id="income-categories"
                      labelText="Income category"
                      data-testid="incomeValue"
                      aria-label="Enter subscription category"
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      name="category"
                      // error={!!state?.errors?.category}
                      displayEmpty
                      emptyLabel="Select income category"
                      options={INCOME_CATEGORIES}
                    />
                  </>
                )}
              />
              {/* {state?.errors?.category && (
                <FormHelperText>
                  {state.errors.category.join(", ")}
                </FormHelperText>
              )} */}
            </div>
            <div className="start-date-col flex w-full flex-col md:w-[50%]">
              <Controller
                control={control}
                name="date"
                render={({
                  field: { onChange: onReactHookFormChange, value },
                }) => {
                  const dateValue = isValidDate(value)
                    ? value
                    : value
                      ? new Date(value as string)
                      : null;
                  return (
                    <MUIDateTimePicker
                      minDate={null}
                      maxDate={null}
                      format={DATE_GLOBAL_FORMAT}
                      onChange={(newValue) => {
                        const finalValue = isValidDate(newValue)
                          ? newValue.toISOString()
                          : newValue;
                        onReactHookFormChange(finalValue);
                      }}
                      labelText="Transaction date"
                      timezone="default"
                      value={dateValue}
                      placeholder="Start transaction date"
                      // error={!!state?.errors?.start_date}
                    />
                  );
                }}
              />
              {/* {state?.errors?.start_date && (
                <FormHelperText>
                  {state.errors.start_date.join(", ")}
                </FormHelperText>
              )} */}
            </div>
          </div>

          {/* {state?.errors?._form ? (
            <div className="mb-8">
              <FormError message={state?.errors?._form.join(", ")} />
            </div>
          ) : null} */}

          <div className="button-wrapper mt-6">
            <Button
              type="submit"
              variant="default"
              size="sm"
              // disabled={isPending}
            >
              {/* {isPending && <Loader className="size-6 animate-spin" />}
              <span className="inline-block">
                {isPending ? "Creating now..." : "Create post"}
              </span> */}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateIncomeForm;
