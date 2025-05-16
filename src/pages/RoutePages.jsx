import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { fetchOneMinPageData } from "../redux/services/oneMinPage.services";
import { fetchStandardsData } from "../redux/services/standards.services";
import { getServiceById } from "../redux/services/services.services";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdditionalPageContent } from "../redux/services/additionalPages.services";

const RoutesPages = () => {
    const { data: dynamicPages, status } = useSelector(state => state.additionalPages);
    const dispatch = useDispatch();

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/first-minute' element={<PageTemplate onGetData={() => dispatch(fetchOneMinPageData())} />} />
            <Route path={`/standards`} element={<PageTemplate onGetData={() => dispatch(fetchStandardsData())} />} />
            <Route path={`/services/:id`} element={<PageTemplate onGetData={(id) => dispatch(getServiceById(id))} />} />
            {status === "succeeded" && dynamicPages.map(page => (
                <Route key={page?.id} path={`/${page?.id}`} element={<PageTemplate onGetData={() => dispatch(fetchAdditionalPageContent(page?.id))} />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default RoutesPages;