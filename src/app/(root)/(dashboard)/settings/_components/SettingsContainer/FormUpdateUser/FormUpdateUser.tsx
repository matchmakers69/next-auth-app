"use client";

import { updateUserSettings } from "@/app/(root)/(dashboard)/settings/_actions/update-user-settings";
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
import { Loader, Loader2 } from "lucide-react";
import { MuiFileInput } from "@/components/ui/formParts/MuiFileInput";
import { handleUploadImageToCloudinary } from "../../../_actions/uploadAvatarToCloudinaryAction";

const FormUpdateUser = ({ user }: FormUpdateUserProps) => {
  const [clientReady, setClientReady] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [enablePasswordUpdate, setEnablePasswordsUpdate] = useState(false);
  const [state, formAction, isPending] = useActionState(updateUserSettings, {
    errors: {},
    success: "",
  });
  const { control, handleSubmit, reset, watch, setValue } =
    useForm<UpdateUserSettingsValues>({
      mode: "onTouched",
      defaultValues: {
        name: "",
        email: "",
        password: "",
        newPassword: "",
        image: "",
      },
    });
  useEffect(() => {
    setClientReady(true);
  }, []);

  // Autopppulate values
  useEffect(() => {
    reset({
      name: user?.name || "",
      email: user?.email || "",
      image: user?.image || "",
    });
  }, [user, reset]);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.success);
      reset({
        password: "",
        newPassword: "",
        name: state.updatedUser?.name || user.name || undefined,
        email: state.updatedUser?.email || user.email || undefined,
        image: state.updatedUser?.image || user.image || undefined,
      });
    }
  }, [reset, state, user]);

  const handleUpdateUserSettingsSubmit = () => {
    const formData = new FormData(formRef.current!);
    if (!enablePasswordUpdate) {
      formData.delete("password");
      formData.delete("newPassword");
    }

    const avatarFile = watch("image") as File | undefined;

    if (avatarFile instanceof File) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result as string;
        setIsUploading(true);

        try {
          const imageUrl = await handleUploadImageToCloudinary(base64Image);

          if (!imageUrl) {
            throw new Error("Image upload failed");
          } else {
            toast.success("Image upload success!");
          }

          // Set the image URL in the form state
          setValue("image", imageUrl);
          formData.set("image", imageUrl);
          startTransition(() => formAction(formData));
        } catch (_err) {
          toast.error("Avatar upload failed!");
        }
      };

      reader.readAsDataURL(avatarFile);
    } else {
      formData.delete("image");
      startTransition(() => formAction(formData));
    }
  };

  if (!clientReady) {
    return <Loader2 size={30} className="mx-auto my-10 animate-spin" />;
  }

  return (
    <form
      ref={formRef}
      className="flex w-full flex-col flex-wrap"
      autoComplete="off"
      noValidate
      action={formAction}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(handleUpdateUserSettingsSubmit)(event);
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

      <div className="mb-12">
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, onBlur, ref, name } }) => (
            <MuiFileInput
              accept="image/*"
              id="image"
              name={name}
              label="Avatar"
              variant="outlined"
              onBlur={onBlur}
              ref={ref}
              fullWidth
              margin="none"
              onFileChange={(file) => {
                onChange(file ?? imagePreview);
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setImagePreview(imageUrl);
                }
              }}
            />
          )}
        />
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
      <div>
        <Button
          type="submit"
          variant="default"
          size="sm"
          disabled={isPending || isUploading}
        >
          {isPending ||
            (isUploading && <Loader className="size-6 animate-spin" />)}
          <span className="inline-block">
            {isPending ? "Updating now..." : "Update user settings"}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default FormUpdateUser;
