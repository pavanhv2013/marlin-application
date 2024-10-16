import React from 'react';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css'; // or any other theme you prefer
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons

const UserProfiledashbord = () => {
    return (
        <div style={{ padding: '20px' }}>
            {/* Message section */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Card style={{ backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '12px', height: '100px' }}>
                    <h3>You bought Premium Package on 31/07/2024 and will expire on 30/10/2024.</h3>
                </Card>
            </div>
            

            {/* Grid Layout for the three sections */}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {/* Current Package Card */}
                <Card title="Current Package" style={{ width: '400px', textAlign: 'center', height: '400px' , borderRadius: '12px'}}>
                    <p>Your current package details</p>
                </Card>

                {/* Package History Card */}
                <Card title="Package History" style={{ width: '400px', textAlign: 'center', borderRadius: '12px' }}>
                    <p>View your past package purchases</p>
                </Card>

                {/* Payment History Card */}
                <Card title="Payment History" style={{ width: '400px', textAlign: 'center', borderRadius: '12px' }}>
                    <p>View your payment records</p>
                </Card>
            </div>
        </div>
    );
};

export default UserProfiledashbord;











































