
export interface Chef {
    _id: string;
    name: string;
    position: string;
    experience: number;
    specialty: string;
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
      hotspot?: boolean;
    };
    description: string;
    available: boolean;
    contact?: string; // Optional field for contact information
  }