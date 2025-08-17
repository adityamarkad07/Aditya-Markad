/* eslint-disable react/prop-types */
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFetch from "@/hooks/use-fetch";
import { addNewCompany } from "@/api/apiCompanies";
import { BarLoader } from "react-spinners";
import { useEffect } from "react";

const schema = z.object({
  name: z.string().min(1, { message: "Company name is required" }),
  logo: z
    .any()
    .refine(
      (file) =>
        file[0] &&
        (file[0].type === "image/png" || file[0].type === "image/jpeg"),
      {
        message: "Only Images are allowed",
      }
    ),
});

const AddCompanyDrawer = ({ fetchCompanies }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingAddCompany,
    error: errorAddCompany,
    data: dataAddCompany,
    fn: fnAddCompany,
  } = useFetch(addNewCompany);

  const onSubmit = (data) => {
    const file = data.logo[0]; // Extract the file
    console.log("Uploaded file:", file); // Debugging: log the file details
    
    if (file && file.type === "image/png") {
      // Proceed with the upload logic
      uploadCompanyLogo(file); // Replace with your actual API call
    } else {
      console.error("Invalid file type");
    }
  };
  
  const uploadCompanyLogo = async (file) => {
    try {
      const formData = new FormData();
      formData.append("logo", file);
  
      const response = await fetch("/api/upload-logo", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Upload failed");
      }
  
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading company logo:", error.message);
    }
  };
  

  useEffect(() => {
    if (dataAddCompany?.length > 0) {
      fetchCompanies();
    }
  }, [loadingAddCompany]);

  return (
    <Drawer>
      <DrawerTrigger>
        <Button type="button" size="sm" variant="secondary">
          Add Company
        </Button>
      </DrawerTrigger>
      <DrawerContent>
  <DrawerHeader>
    <DrawerTitle>Add a New Company</DrawerTitle>
  </DrawerHeader>
  <form className="flex gap-2 p-4 pb-0" onSubmit={handleSubmit(onSubmit)}>
    {/* Company Name */}
    <Input 
      placeholder="Company name" 
      {...register("name", { required: "Company name is required." })} 
    />

    {/* Company Logo */}
    <Input
      type="file"
      accept="image/png"
      className="file:text-gray-500"
      {...register("logo", {
        required: "Company logo is required.",
        date: (fileList) =>
          fileList[0]?.type === "image/png" || "Only PNG files are allowed.",
      })}
    />

    {/* Add Button */}
    <Button
      type="submit"
      variant="destructive"
      className="w-40"
    >
      Add
    </Button>
  </form>
  <DrawerFooter>
    {/* Validation Errors */}
    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}

    {/* Other Errors */}
    {errorAddCompany?.message && (
  <p className="text-red-500">
    {errorAddCompany?.message || "Error uploading company logo. Please try again."}
  </p>
)}

    {/* Loading State */}
    {loadingAddCompany && <BarLoader width={"100%"} color="#36d7b7" />}

    {/* Cancel Button */}
    <DrawerClose asChild>
      <Button type="button" variant="secondary">
        Cancel
      </Button>
    </DrawerClose>
  </DrawerFooter>
</DrawerContent>

    </Drawer>
  );
};

export default AddCompanyDrawer;
