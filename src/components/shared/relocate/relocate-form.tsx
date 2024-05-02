import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '../../ui/use-toast.ts';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '../../ui/form.tsx';
import { Input, PhoneInput } from '../../ui/input.tsx';
import { Textarea } from '../../ui/textarea.tsx';
import { Checkbox } from '../../ui/checkbox.tsx';
import { Button } from '../../ui/button.tsx';

export const FormSchema = z
  .object({
    name: z.string().nonempty('обязательное поле'),
    phone: z
      .string()
      .nonempty('обязательное поле')
      .min(11, 'минимально 11 символов'),
    comment: z.string().optional(),
    approval: z.boolean(),
  })
  .superRefine((val, ctx) => {
    if (!val.approval)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'обязательно согласие',
        path: ['approval'],
      });
  });

export const RelocateForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      phone: '+7',
      comment: '',
      approval: false,
    },
  });

  const handleSuccess = () => {
    toast({
      variant: 'success',
      title: 'Ваша заявка успешно отправленна',
    });
  };

  const handleSubmit = (fields: z.infer<typeof FormSchema>) => {
    console.log(fields);
    //TODO: implements api request
    handleSuccess();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col justify-start gap-5"
      >
        <div className="flex w-full lg:flex-row flex-col items-center gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full">
                <FormControl>
                  <Input placeholder="Имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full">
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Комменнтраний (по желанию)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="approval"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Я соглашаюсь на обработку персональных данных и принимаю
                  условия политики обработки персональных данных.
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          className="mt-4 text-lg font-semibold w-fit !h-auto"
          variant="secondary"
        >
          Отправить заявку
        </Button>
      </form>
    </Form>
  );
};
