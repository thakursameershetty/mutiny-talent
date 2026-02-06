import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InfluencerApplicationDialogProps {
  trigger?: React.ReactNode;
  mode?: "brand" | "creator";
}

export const InfluencerApplicationDialog: React.FC<InfluencerApplicationDialogProps> = ({ 
  trigger, 
  mode = "creator" 
}) => {
  const isBrand = mode === "brand";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    
    // Add the type to the payload
    const submissionData = { ...payload, type: mode };
    
    // TODO: replace with API call
    // eslint-disable-next-line no-console
    console.log(`${isBrand ? "Brand" : "Creator"} application submitted:`, submissionData);
  };

  return (
    <Dialog>
      {trigger ? (
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button variant="hero" size="hero" className="w-full sm:w-auto">
            Open Form
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="bg-white text-black max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <span className="block text-2xl !font-body">
              {isBrand ? "Join as Brand" : "Join as Influencer"}
            </span>
            <span className="text-sm text-mutiny-yellow font-semibold !font-body">
              Fill in the details below
            </span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
          
          {/* 1. Full Name */}
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" placeholder="Enter your full name" required />
          </div>

          {/* 2. Mobile Number */}
          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" name="mobile" type="tel" placeholder="Enter your mobile number" required />
          </div>

          {/* 3. Email Address */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
          </div>

          {/* 4. Company Name (Brand) OR Instagram ID (Influencer) */}
          {isBrand ? (
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" name="companyName" placeholder="Enter your company name" required />
            </div>
          ) : (
            <div>
              <Label htmlFor="instagram">Instagram ID</Label>
              <Input id="instagram" name="instagram" placeholder="Enter your Instagram handle" required />
            </div>
          )}

          {/* 5. Location */}
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" placeholder="City, Country" />
          </div>

          {/* 6. Price for Promotion */}
          <div>
            <Label htmlFor="price">Price for Promotion</Label>
            <Input id="price" name="price" placeholder="Enter your price" />
          </div>

          {/* 7. Submit Application */}
          <DialogFooter className="mt-4 gap-3 sm:gap-0">
            <DialogClose asChild>
              <Button variant="outline" type="button" className="w-full sm:w-1/3">Cancel</Button>
            </DialogClose>
            
            <Button type="submit" className="w-full sm:w-2/3 bg-black text-mutiny-yellow hover:bg-black/90 hover:text-white transition-colors">
              Submit Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InfluencerApplicationDialog;