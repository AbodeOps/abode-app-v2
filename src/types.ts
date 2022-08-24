declare global {
	interface Window {
		Intercom: any;
	}
}

export type HTMLInputTypeAttribute =
	| 'number'
	| 'search'
	| 'button'
	| 'time'
	| 'image'
	| 'text'
	| 'tel'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'month'
	| 'password'
	| 'radio'
	| 'range';

export interface TabItem {
	id: number;
	label: string;
	to: string;
	current: boolean;
}

export interface OptionItem {
	id: number;
	value: string;
}

export type jobType = 'contract' | 'permanent' | 'temporary';
export type jobStatusTypes = 'upcoming' | 'in-progress' | 'completed';

export interface WorkerItem {
	id: number;
	name: string;
	rating: string;
	avatar?: string;
	startedAt: string;
}

export interface FeeItem {
	name: string;
	value: string;
}

export interface CostItem {
	standard?: string;
	overtime?: string;
	excludesOvertime?: boolean;
	fees?: FeeItem[];
	value?: string;
}

export interface JobItem {
	id: number;
	role: string;
	isCompleted: boolean;
	type: jobType;
	status: string;
	createdAt: string;
	neededWorkersCount: number;
	hiredWorkers: WorkerItem[];
	startedAt: string;
	endedAt: string;
	description: string;
	sector: string;
	address: string;
	workingDays: string;
	workingHours: string;
	projectType: string;
	yearsOfExperience: string;
	tools: string;
	requiredTasks: string[];
	requiredQualifications: string[];
	costs: {
		payPerHour: CostItem;
		payPerDay: CostItem;
		payPerWeek: CostItem;
		totalCostPerDay: CostItem;
		totalCostPerWeek: CostItem;
	};
}

export interface PersonalInformationForm {
	first_name: string | undefined;
	last_name: string | undefined;
	email: string | undefined;
	address: string | undefined;
	phone_number: string | undefined;
	company_name?: string | undefined;
}

export interface LoginForm {
	email: string;
	password: string;
}

export interface CompanySignupForm {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	companyName: string;
	password: string;
}

export interface WorkerSignupForm {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
	address: string;
}

export interface ChangePasswordForm {
	currentPassword: string;
	newPassword: string;
	confirmNewPassword: string;
}

export interface CreateJobDetailsForm {
	visibility?: string;
	role: OptionItem | {};
	numberOfOpenings: string;
	type: OptionItem | {};
	description: string;
	sector: OptionItem | {};
	siteAddress: string;
	startDate: string;
	endDate: string;
	startTime: string;
	endTime: string;
	daysOnSite: string[];
}

export interface CreateJobRequirementsForm {
	projectType: OptionItem | {};
	yearsOfExperience: OptionItem | {};
	tools: OptionItem | {};
	requiredTasks: OptionItem[];
	qualificationsRequired: OptionItem[];
}

export interface CreateJobForm extends CreateJobDetailsForm, CreateJobRequirementsForm {}

export interface ExtraPlaceData {
	lat?: number;
	long?: number;
	postal_town?: string;
	postal_code?: string;
	country?: string;
	administrative_area_level_1?: string;
	administrative_area_level_2?: string;
}

export interface CreateJobDTO extends ExtraPlaceData {
	job_role_id: number;
	openings: number;
	job_type_id: number;
	years_of_experience_id: number;
	job_description?: string;
	start_date: string;
	end_date?: string;
	qualifications?: number[];
	address?: string;
	job_sector_id: number;
	tool_id: number;
	project_type_id: number;
}

export interface AddressComponent {
	long_name: string;
	short_name: string;
	types: string[];
}

export interface Place {
	address_components: AddressComponent[];
	geometry?: {
		location: {
			lat: () => number;
			lng: () => number;
		};
	};
}

export type addressVariant = 'short_name' | 'long_name';

export interface CompanyJobOptions {
	sectors: OptionItem[];
	jobTypes: OptionItem[];
	projectTypes: OptionItem[];
	roles: OptionItem[];
	tools: OptionItem[];
	yearsOfExperience: OptionItem[];
	qualifications: OptionItem[];
	requiredTasks: OptionItem[];
}
