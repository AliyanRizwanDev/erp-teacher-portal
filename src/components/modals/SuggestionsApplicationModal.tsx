import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { SuggestionTypeDropDownOptions } from "../../utils/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface SuggestionFormData {
  suggestionType: string;
  suggestionDetail: string;
}

// Yup validation schema
const suggestionSchema = yup.object().shape({
  suggestionType: yup.string().required("Suggestion type is required"),
  suggestionDetail: yup
    .string()
    .required("Suggestion details are required")
    .min(10, "Details must be at least 10 characters")
    .max(500, "Details cannot exceed 500 characters"),
});

export const SuggestionApplicationModal = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SuggestionFormData>({
    resolver: yupResolver(suggestionSchema),
    defaultValues: {
      suggestionType: undefined,
      suggestionDetail: "",
    },
  });

  const onSubmit: SubmitHandler<SuggestionFormData> = (data) => {
    toast({
      title: "Application Submitted",
      description: `Your suggestion of type "${data.suggestionType}" has been submitted successfully!`,
    });
  };

  return (
    <div className="suggestions-application-modal">
      <div className="px-5 lg:px-10 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-[130px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Suggestion Type
            </div>
            <Controller
              name="suggestionType"
              control={control}
              render={({ field }) => (
                <div>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={cn(
                        "h-10 w-full rounded-md border cursor-pointer",
                        errors.suggestionType && "border-red-500",
                      )}
                    >
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SuggestionTypeDropDownOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="cursor-pointer"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.suggestionType && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.suggestionType.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid md:grid-cols-[130px_1fr] gap-4 items-start mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Suggestion Detail
            </div>
            <Controller
              name="suggestionDetail"
              control={control}
              render={({ field }) => (
                <div className="w-full">
                  <Textarea
                    placeholder="Write here..."
                    rows={6}
                    className={cn(
                      "w-full resize-none rounded-md border",
                      errors.suggestionDetail && "border-red-500",
                    )}
                    {...field}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.suggestionDetail && (
                      <div className="text-red-500 text-xs">
                        {errors.suggestionDetail.message}
                      </div>
                    )}
                    <div className="text-xs text-gray-500 ml-auto">
                      {field.value?.length || 0}/500
                    </div>
                  </div>
                </div>
              )}
            />
          </div>

          <div className="flex justify-center sm:justify-end gap-3 mt-6">
            <Button
              variant="outline"
              className="px-6 py-2 hover:bg-[#0070bf] cursor-pointer hover:text-white"
            >
              Application Listing
            </Button>
            <Button
              type="submit"
              className="px-6 py-2 bg-[#0070bf] hover:bg-[#005a99] cursor-pointer"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
