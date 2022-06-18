import http from 'k6/http';
import { check } from 'k6';

const params = {
    headers: {
        'Content-Type': 'application/json',
    }
};

const payload = {
    "name":"test",
    "salary":"123",
    "age":"23"
};

export default () => {
    let res = http.post('http://dummy.restapiexample.com/api/v1/create', payload, params);

    check(res, {
        'status was 200': (r) => r.status === 200,
    });
}
