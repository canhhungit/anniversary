import { sleep } from '@/lib/sleep';

type PersonalInfoData = {
  name: string;
  role: string;
  country: string;
  yearsOfExperience: number;
};

export async function getPersonalInfo(): Promise<PersonalInfoData> {
  await sleep(600);

  return {
    name: 'Nguyễn Văn A',
    role: 'Senior Frontend Engineer',
    country: 'Việt Nam',
    yearsOfExperience: 8,
  };
}
