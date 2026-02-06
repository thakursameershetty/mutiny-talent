import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InfluencerApplicationDialogProps {
  trigger?: React.ReactNode;
}

export const InfluencerApplicationDialog: React.FC<InfluencerApplicationDialogProps> = ({ trigger }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    // TODO: replace with API call
    // eslint-disable-next-line no-console
    console.log("Influencer application submitted:", payload);
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
            Brands, Let's Go Viral
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="bg-white text-black max-w-xl">
        <DialogHeader>
          <DialogTitle>
            <span className="block text-2xl font-display">Join as Influencer</span>
            <span className="text-sm text-mutiny-yellow font-semibold">We're excited to hear from you</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" placeholder="Enter your full name" required />
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" name="mobile" type="tel" placeholder="Enter your mobile number" required />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
          </div>

          <div>
            <Label htmlFor="instagram">Instagram ID</Label>
            <Input id="instagram" name="instagram" placeholder="Enter your Instagram handle" />
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" placeholder="Enter your location (City, Country)" />
          </div>

          <div>
            <Label htmlFor="price">Price for Promotion</Label>
            <Input id="price" name="price" placeholder="Enter your price for one promotional reel/ad" />
          </div>

          <DialogFooter className="mt-2">
            <div className="flex w-full gap-3">
              <DialogClose asChild>
                <Button variant="outline" className="w-full">Cancel</Button>
              </DialogClose>

              <Button type="submit" className="w-full bg-black text-mutiny-yellow hover:opacity-95">Submit Application</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InfluencerApplicationDialog;
