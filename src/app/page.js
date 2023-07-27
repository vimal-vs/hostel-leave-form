import Header from "@/components/header";
import Form from "@/components/form";

export default function Home() {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-4 rounded-xl mx-4 bg-white px-6 py-6 md:mx-auto max-w-2xl">
        <Header />
        <Form />
      </div>
    </div>
  )
  }
