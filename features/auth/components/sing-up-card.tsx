import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";

import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
 CardDescription
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
 name: z.string().trim().min(1, "Required"),
 email: z.string().email(),
 password: z.string().min(8, "Minimum of 8 charecters required"),
});

export const SignUpCard = () => {
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   name: "",
   email: "",
   password: "",
  },
 });
 const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log({ values });
 }
 return (
  <Card className="w-full h-full md:w-[487px] border-none shadow-none">
   <CardHeader className="flex items-center justify-between text-center p-7">
    <CardTitle className="text-2xl">
     Sign Up
    </CardTitle>
    <CardDescription>
     By signing up you agree to our {""}
     <Link href="">
      <span className="text-blue-500"> Privacy Policy</span>
     </Link> and
     <Link href="">
      <span className="text-blue-500"> Terms of Services.</span>
     </Link>
    </CardDescription>
   </CardHeader>
   <div className="px-7 mb-2">
    <Separator />
   </div>
   <CardContent className="p-7">
    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
       name="name"
       control={form.control}
       render={({ field }) => (
        <FormItem>
         <FormControl>
          <Input
           {...field}
           type="text"
           placeholder="Enter your name"
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       name="email"
       control={form.control}
       render={({ field }) => (
        <FormItem>
         <FormControl>
          <Input
           {...field}
           type="email"
           placeholder="Enter email address"
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       name="password"
       control={form.control}
       render={({ field }) => (
        <FormItem>
         <FormControl>
          <Input
           {...field}
           type="password"
           placeholder="Enter password "
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <Button variant="secondary" disabled={false} size="lg" className="w-full">Sign up</Button>
     </form>
    </Form>
   </CardContent>
   <div className="p-1">
    <Separator />
   </div>
   <CardContent className="p-7 flex flex-col gap-y-4">
    <Button
     size="lg"
     variant={"secondary"}
     className="w-full"
     disabled={false}
    >
     <FcGoogle className="mr-2 size-5" />
     Login with Google
    </Button>
   </CardContent>
   <div className="px-7">
    <Separator />
   </div>
   <CardContent className="p-7 flex items-center justify-between">
    <p>
     Already have an account?
     <Link href="/sign-in">
      <span className="text-blue-700">&nbsp;Sign In</span>
     </Link>
    </p>
   </CardContent>
  </Card>


 );
}
