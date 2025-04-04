
import { ProfileSettings } from "@/components/settings/ProfileSettings";

const Settings = () => {
  return (
    <div className="flex-1 py-4 sm:py-6">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-[1400px]">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account preferences and settings
          </p>
        </div>

        <div className="space-y-6">
          <ProfileSettings />
        </div>
      </div>
    </div>
  );
};

export default Settings;
