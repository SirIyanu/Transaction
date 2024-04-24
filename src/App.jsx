import { LayOut } from "./layout";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { NewTransaction } from "./pages/NewTransaction";
import { TransactionHistory } from "./pages/TransactionHistory";
import { Vault } from "./pages/Vault";
import { AccountTransfer } from "./pages/NewTransaction/AccountTransfer";
import { AccountTransferDetails } from "./pages/NewTransaction/AccountTransferDetails";
import { BeneficiaryDetails } from "./pages/NewTransaction/BeneficiaryDetails";
import { BeneficiaryTwo } from "./pages/NewTransaction/BeneficiaryTwo";
import { SenderDetails } from "./pages/NewTransaction/SenderDetails";
import { ModalOne } from "./components/Modals/ModalOne";
import { ModalTwo } from "./components/Modals/ModalTwo";
import { ModalThree } from "./components/Modals/ModalThree";
import { ModalFour } from "./components/Modals/ModalFour";

function App() {
  return (
    <div className="roboto-regular">
      <Routes>
        <Route element={<LayOut />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transaction">
            <Route path="new-transaction" element={<NewTransaction />}>
              <Route path="account-transfer" element={<AccountTransfer />} />
              <Route
                path="account-transfer-details"
                element={<AccountTransferDetails />}
              />
              <Route
                path="beneficiary-details"
                element={<BeneficiaryDetails />}
              />
              <Route path="beneficiary-two" element={<BeneficiaryTwo />} />
              <Route path="sender-details" element={<SenderDetails />} />
            </Route>
            <Route
              path="transaction-history"
              element={<TransactionHistory />}
            />
          </Route>
          <Route path="vault" element={<Vault />} />
        </Route>
        <Route path="modal-one" element={<ModalOne />} />
        <Route path="modal-two" element={<ModalTwo />} />
        <Route path="modal-three" element={<ModalThree />} />
        <Route path="modal-four" element={<ModalFour />} />
      </Routes>
    </div>
  );
}

export default App;
