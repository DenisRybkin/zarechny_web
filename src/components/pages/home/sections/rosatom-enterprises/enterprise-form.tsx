import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '../../../../ui/use-toast.ts';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../ui/form.tsx';
import { Button } from '../../../../ui/button.tsx';
import { Input, PhoneInput } from '../../../../ui/input.tsx';

const FormSchema = z.object({
  name: z.string().nonempty('обязательное поле'),
  phone: z.string().nonempty('обязательное поле'),
  comment: z.string().optional(),
});

export const EnterpriseForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      phone: '+7',
      comment: '',
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
    <div className="flex flex-col w-full lg:py-10 pt-5 lg:pl-8 lg:pr-3">
      <h2 className="text-2xl text-brown-t">Хотите работать в Росатоме?</h2>
      <p className="lg:text-xl text-lg text-brown-t mt-10 mb-5">
        Оставьте заявку и мы обязательно свяжемся с вами в ближайшее время
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col justify-start gap-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
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
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Комментарий</FormLabel>
                <FormControl>
                  <Input placeholder="Комметарий" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mt-4 text-lg h-15 font-semibold"
            variant="secondary"
          >
            Отправить
          </Button>
        </form>
      </Form>
    </div>
  );
};
