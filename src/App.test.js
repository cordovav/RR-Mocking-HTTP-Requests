import {render, screen, waitFor } from '@testing-library/react'
import App from './App'

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('coder')
    })

beforeEach(()=> {
    //sets everything back to inital state before each test
    fetch.resetMocks();
})