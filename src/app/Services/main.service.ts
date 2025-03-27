import { Injectable } from '@angular/core';
import { leftPanelDataInterface, memberDataInterface, staffDataInterface, taskDataInterface } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  // Select Management, Showing all initially as -1 
  selectedManagement: number = -1;

  // Data Variables
  staffData: staffDataInterface[] = [
    {
      tid: 0,
      name: 'Akash Vagasia',
      position: 'Floor Manager',
      contactNumber: '123-456-7890',
      monthLeaves: 2,
      annualLeaves: 20
    },
    {
      tid: 1,
      name: 'Anil Rathod',
      position: 'Trainer',
      contactNumber: '234-567-8901',
      monthLeaves: 3,
      annualLeaves: 18
    },
    {
      tid: 2,
      name: 'Bhargav Patel',
      position: 'Trainer',
      contactNumber: '345-678-9012',
      monthLeaves: 1,
      annualLeaves: 22
    },
    {
      tid: 3,
      name: 'Jashveer Patel',
      position: 'Trainer',
      contactNumber: '456-789-0123',
      monthLeaves: 4,
      annualLeaves: 15
    },
    {
      tid: 4,
      name: 'Raj Rathod',
      position: 'Maintenance',
      contactNumber: '567-890-1234',
      monthLeaves: 2,
      annualLeaves: 25
    },
    {
      tid: 5,
      name: 'Chotu',
      position: 'Cleaner',
      contactNumber: '678-901-2345',
      monthLeaves: 5,
      annualLeaves: 12
    }
  ];

  leftData: leftPanelDataInterface[] = [
    {
      id: 0,
      primaryLabel: 'Active',
      secondaryLabel: 'Members',
      tooltip: 'View all members (includes expired subscriptions)'
    },
    {
      id: 1,
      primaryLabel: 'Register',
      secondaryLabel: 'Member',
      tooltip: 'Register a new member'
    },
    {
      id: 2,
      primaryLabel: 'Former',
      secondaryLabel: 'Members',
      tooltip: 'View former members who have left the gym'
    },
    {
      id: 2,
      primaryLabel: 'Edit',
      secondaryLabel: 'Member',
      tooltip: 'View former members who have left the gym'
    }
  ];

  leftDataMaintainanceTask: leftPanelDataInterface[] = [
    {
      id: 0,
      primaryLabel: 'All',
      secondaryLabel: 'Tasks',
      tooltip: 'View all tasks'
    },
    {
      id: 1,
      primaryLabel: 'Pending',
      secondaryLabel: 'Tasks',
      tooltip: 'View pending tasks'
    },
    {
      id: 2,
      primaryLabel: 'Completed',
      secondaryLabel: 'Tasks',
      tooltip: 'View completed tasks'
    },
    {
      id: 3,
      primaryLabel: 'Add/Edit',
      secondaryLabel: 'Task',
      tooltip: 'Add or Edit task'
    }

  ];

  memberData: memberDataInterface[] = [
    {
      "id": 1,
      "name": "Rajesh Kumar",
      "contactNumber": "9876543210",
      "address": "123 MG Road, Bengaluru",
      "physiqueGoal": "Fat Loss",
      "expertiseLevel": "Beginner",
      "trainer": "Priya Sharma",
      "joiningDate": "2025-03-01",
      "subscriptionMonth": 6,
      "subscriptionEndDate": "2025-08-01",
      "paymentRemark": "Paid in full",
      "remarks": "Looking forward to training!",
      "hasLeftGym": false,
      "leftGymDate": null
    },
    {
      "id": 2,
      "name": "Neha Patel",
      "contactNumber": "9123456789",
      "address": "456 Ashoka Road, Mumbai",
      "physiqueGoal": "Weight Gain",
      "expertiseLevel": "Intermediate",
      "trainer": "Vikram Desai",
      "joiningDate": "2025-02-20",
      "subscriptionMonth": 12,
      "subscriptionEndDate": "2026-02-20",
      "paymentRemark": "Paid deposit",
      "remarks": "Wants to build muscle mass.",
      "hasLeftGym": false,
      "leftGymDate": null
    },
    {
      "id": 3,
      "name": "Amit Reddy",
      "contactNumber": "8223344556",
      "address": "789 Jubilee Hills, Hyderabad",
      "physiqueGoal": "Body Building",
      "expertiseLevel": "Expert",
      "trainer": "Ravi Singh",
      "joiningDate": "2025-01-15",
      "subscriptionMonth": 3,
      "subscriptionEndDate": "2025-04-15",
      "paymentRemark": "Paid in full",
      "remarks": "Preparing for competition.",
      "hasLeftGym": true,
      "leftGymDate": "22/11/2024"
    },
    {
      "id": 4,
      "name": "Ravi Kumar",
      "contactNumber": "8233445566",
      "address": "21 B, PVR Mall, Delhi",
      "physiqueGoal": "Fat Loss",
      "expertiseLevel": "Learner",
      "trainer": "Sushila Gupta",
      "joiningDate": "2025-03-05",
      "subscriptionMonth": 9,
      "subscriptionEndDate": "2025-12-05",
      "paymentRemark": "Paid in full",
      "remarks": "Looking to lose weight and improve fitness.",
      "hasLeftGym": true,
      "leftGymDate": "5/1/2025"
    },
    {
      "id": 5,
      "name": "Suman Sharma",
      "contactNumber": "9988776655",
      "address": "234 B, Shankar Market, Kolkata",
      "physiqueGoal": "Weight Gain",
      "expertiseLevel": "Beginner",
      "trainer": "Arvind Kumar",
      "joiningDate": "2025-03-01",
      "subscriptionMonth": 12,
      "subscriptionEndDate": "2026-03-01",
      "paymentRemark": "Paid deposit",
      "remarks": "Needs help with weight training.",
      "hasLeftGym": false,
      "leftGymDate": null
    },
    {
      "id": 6,
      "name": "Rina Deshmukh",
      "contactNumber": "8776655443",
      "address": "786 Shivaji Nagar, Pune",
      "physiqueGoal": "Body Building",
      "expertiseLevel": "Intermediate",
      "trainer": "Neeraj Soni",
      "joiningDate": "2025-02-25",
      "subscriptionMonth": 6,
      "subscriptionEndDate": "2025-08-25",
      "paymentRemark": "Paid in full",
      "remarks": "Focusing on strength and endurance.",
      "hasLeftGym": false,
      "leftGymDate": null
    },
    {
      "id": 7,
      "name": "Vikram Singh",
      "contactNumber": "9001122334",
      "address": "12 D, Banjara Hills, Hyderabad",
      "physiqueGoal": "Fat Loss",
      "expertiseLevel": "Expert",
      "trainer": "Aarti Mehta",
      "joiningDate": "2025-01-20",
      "subscriptionMonth": 3,
      "subscriptionEndDate": "2025-04-20",
      "paymentRemark": "Paid in full",
      "remarks": "Wants to cut down body fat for a leaner physique.",
      "hasLeftGym": false,
      "leftGymDate": null
    },
    {
      "id": 8,
      "name": "Kavita Singh",
      "contactNumber": "9911223344",
      "address": "432 Laxmi Complex, Ahmedabad",
      "physiqueGoal": "Weight Gain",
      "expertiseLevel": "Intermediate",
      "trainer": "Pradeep Yadav",
      "joiningDate": "2025-03-10",
      "subscriptionMonth": 6,
      "subscriptionEndDate": "2025-09-10",
      "paymentRemark": "Paid in full",
      "remarks": "Trying to gain muscle mass.",
      "hasLeftGym": false,
      "leftGymDate": null
    },
    {
      "id": 9,
      "name": "Suresh Babu",
      "contactNumber": "7799882233",
      "address": "654 B, Vasant Vihar, Delhi",
      "physiqueGoal": "Body Building",
      "expertiseLevel": "Beginner",
      "trainer": "Harish Kumar",
      "joiningDate": "2025-02-18",
      "subscriptionMonth": 12,
      "subscriptionEndDate": "2026-02-18",
      "paymentRemark": "Paid in full",
      "remarks": "Excited to start strength training.",
      "hasLeftGym": false,
      "leftGymDate": null
    },
    {
      "id": 10,
      "name": "Shalini Patel",
      "contactNumber": "8001122334",
      "address": "876 MG Road, Surat",
      "physiqueGoal": "Fat Loss",
      "expertiseLevel": "Learner",
      "trainer": "Deepak Verma",
      "joiningDate": "2025-02-10",
      "subscriptionMonth": 9,
      "subscriptionEndDate": "2025-11-10",
      "paymentRemark": "Paid deposit",
      "remarks": "Looking to lose fat and improve overall fitness.",
      "hasLeftGym": false,
      "leftGymDate": null
    }   
  ];

  taskData: taskDataInterface[] = [
    {
      "id": 1,
      "taskDesc": "Clean and sanitize gym equipment",
      "dueDate": "2025-03-15",
      "highPriority": true,
      "status": "Pending",
      "creationDate": "2025-03-10" 
    },
    {
      "id": 2,
      "taskDesc": "Check and replace broken treadmill belt",
      "dueDate": "2025-03-20",
      "highPriority": true,
      "status": "Pending",
      "creationDate": "2025-03-11" 
    },
    {
      "id": 3,
      "taskDesc": "Inspect and calibrate weight machines",
      "dueDate": "2025-03-22",
      "highPriority": false,
      "status": "Completed",
      "creationDate": "2025-03-09" 
    },
    {
      "id": 4,
      "taskDesc": "Lubricate all gym equipment",
      "dueDate": "2025-03-18",
      "highPriority": true,
      "status": "Pending",
      "creationDate": "2025-03-08" 
    },
    {
      "id": 5,
      "taskDesc": "Clean air conditioning filters",
      "dueDate": "2025-03-25",
      "highPriority": false,
      "status": "Pending",
      "creationDate": "2025-03-07" 
    },
    {
      "id": 6,
      "taskDesc": "Replace damaged gym mats",
      "dueDate": "2025-03-28",
      "highPriority": true,
      "status": "Completed",
      "creationDate": "2025-03-06" 
    }
  ];

  selectManagement(blockCode: number) {
    this.selectedManagement = blockCode;
  }

  // Staff Management
  editStaffData(trainerData: any) {

    this.staffData.forEach((trainer) => {
      if (trainer.tid == trainerData.tid) {
        trainer.name = trainerData.name
        trainer.position = trainerData.position
        trainer.contactNumber = trainerData.contactNumber
        trainer.monthLeaves = trainerData.monthLeaves
        trainer.annualLeaves = trainerData.annualLeaves
        return;
      }
    });
  }

  registerStaff(trainerData: any) {
    this.staffData[this.staffData.length] = { ...trainerData, tid: this.staffData.length };
  }

  // Task Management
  addTask(taskData: taskDataInterface) {
    this.taskData.push({ ...taskData, id: this.taskData.length+1, creationDate: new Date().toDateString() });
    this.taskData[this.taskData.length] = { ...taskData, id: this.taskData.length+1, creationDate: new Date().toDateString() };
  }

  isVisible:boolean = false;
  msg:string = "Test";

  showNotification(msg:string) {
    setTimeout(()=>{
      this.isVisible = true;
    },5000);

    this.isVisible = false;
    this.msg = msg;
  }

  // Member Management
  registerMember(memberData: any) {
    console.log(memberData);
    this.memberData[this.memberData.length] = { ...memberData, id: this.memberData.length };
  }

  editMember() {
    console.log('Edit Member');
  }

  formerMember(id: number, date: any) {
    this.memberData.forEach((member) => {
      if (member.id == id) {
        member.hasLeftGym = true;
        member.leftGymDate = date ? date : new Date().toDateString();
      }
    });
  }
}
